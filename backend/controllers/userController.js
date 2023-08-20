const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Register User
const registerUser = asyncHandler(async (req, res) => {
  const {
    username,
    name,
    email,
    phone,
    gender,
    dob,
    country,
    city,
    password,
    confirm_password,
  } = req.body;

  if (password != confirm_password) {
    res.status(400);
    throw new Error("user already registered");
  }

  const patient = await prisma.patient.findFirst({
    where: {
      user: {
        email: email,
      },
    },
  });

  if (patient) {
    res.status(400);
    throw new Error("Confirm your password!");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const first_name = name.split(" ")[0];
  const last_name = name.split(" ")[name.split(" ").length - 1];

  // Create a new user record first
  const newUser = await prisma.user.create({
    data: {
      username: username,
      last_name: last_name,
      password: hashedPassword,
      email: email,
      phone: phone,
      country: country,
      gender: gender,
      city: city,
      date_of_birth: dob,
      roles: ["Patient"],
      first_name: first_name,
    },
  });

  // Create a new patient record and associate it with the user
  const newPatient = await prisma.patient.create({
    data: {
      user: {
        connect: { id: newUser.id },
      },
      allergies: [],
      medicalConditions: [],
    },
  });

  if (newPatient) {
    res.json({
      _id: newPatient.id,
      name: newUser.first_name + " " + newUser.last_name,
      email: newPatient.email,
      token: generateToken(newPatient.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// Generate JWT

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  // loginUser,
  // getMe,
};
