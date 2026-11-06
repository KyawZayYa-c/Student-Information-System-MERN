import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required'],
        unique: true,
    },
    studentId: {
        type: String,
        required: [true, 'Student ID is required'],
        unique: true,
        trim: true,
        uppercase: true,
    },
    dateOfBirth: {
        type: Date,
        validate: {
            validator: (value) => !value || value < new Date(),
            message: 'Date of birth must be in the past'
        }
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female', 'other'],
            message: 'Gender must be male, female or other'
        }
    },
    phone : {
        type : String,
        required: [true, 'Phone number is required'],
        unique: true,
        match : [/^\+?[0-9 \-] {6, 20}$/, 'Please provide a valid phone number']
    },
    address : {
        type : String,
        trim : true,
        maxLength : [500, 'Address must be at most 500 characters']
    },
}, { timestamps: true }
);


const Student = mongoose.model('Student', studentSchema);
export default Student;