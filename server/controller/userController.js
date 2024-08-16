import User from "../models/userSchema.js";

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Something went wrong while fetching users" });
  }
};

export const createUser = async (req, res) => {
  const { firstName, lastName, email, isActiveStatus, userMsg, phone } =
    req.body;
  console.log(req.body);

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      isActiveStatus,
      msg: userMsg,
      phoneNumber: phone,
    });

    await newUser.save();

    res.status(201).json({ result: newUser });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Something went wrong while creating the user" });
  }
};

export const updateUserRecord = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, isActiveStatus, userMsg, phone } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.isActiveStatus =
      isActiveStatus !== undefined ? isActiveStatus : user.isActiveStatus;
    user.msg = userMsg || user.msg;
    user.phoneNumber = phone || user.phoneNumber;

    await user.save();
    res.status(200).json({ result: user });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Something went wrong while updating the user record" });
  }
};

export const deleteUserRecord = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Something went wrong while deleting the user record" });
  }
};

export const fetchUserWithTheId = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Something went wrong while fetching the user" });
  }
};
