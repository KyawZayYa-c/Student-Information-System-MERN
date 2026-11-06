import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        requied: [true, 'Name is required'],
        trim: true,
        minLength: [2, 'Name must be at least 2 character'],
        maxLenght: [100, "Name must be at most 100 character"],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
    },
    passwordHash: {
        type: String,
        required: [true, 'Password is required'],
        select: false,
    },
    role: {
        type: String,
        required: [true, 'Role is required'],
        enum: {
            values: ['headmaster', 'teacher', 'student'],
            message: 'Role must be headmaster, teacher or student'
        }
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    refreshToken: {
        type: String,
        default: null,
        select: false,
    }
}, { timestamps: true }
);

userSchema.index({ role: 1 });
userSchema.index({ isActive: 1 });

const User = mongoose.model('User', userSchema);
export default User;