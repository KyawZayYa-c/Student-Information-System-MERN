import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
     userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'User ID is required'],
            unique: true,
        },
        teacherId: {
            type: String,
            required: [true, 'Teacher ID is required'],
            unique: true,
            trim: true,
            uppercase: true,
    },
    qualification: {
        type: String,
        maxlength: [200, 'Qualification must be at most 200 characters']
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
}, { timestamps: true });
    
const Teacher = mongoose.model('Teacher', teacherSchema);
export default Teacher;