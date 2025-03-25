const mongoose = require("mongoose");
const bcryt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "A user must have a name"],
      trim: true,
      minlength: [3, "A user should atleast have 3 or more characters"],
      maxlength: [50, "Username must not exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "A user must enter email"],
      trim: true,
      lower: true,
      unique: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "A user must enter password"],
      minlength: 6,
      select: false,
      // match: [
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      //   "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character.",
      // ],
    },

    // passwordConfirm: {
    //   type: String,
    //   required: [true, "Please confirm your password"],
    //   validate: {
    //     validator: function (el) {
    //       return el === this.password;
    //     },
    //     message: "Passwords does not match",
    //   },
    // },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const encrypt = await bcryt.hash(this.password, 12);
  this.password = encrypt;

  next();
});

userSchema.methods.comparePasswords = async (
  candidatePassword,
  userPassword
) => {
  return await bcryt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
