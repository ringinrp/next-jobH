import { JOBTYPES } from '@/app/constants';
import {z} from 'zod';

export const jobFormSchema = z.object ({
    roles: z.string({required_error: 'Job Title is required'}).min(3, {message: 'Job Title must be at least 3 characters'}),
    jobType: z.enum(JOBTYPES, {required_error: 'You need to select a job type'}),
    salaryFrom: z.string({required_error: 'Salary From is required'}),
    salaryTo: z.string({required_error: 'Salary To is required'}),
    categoryId: z.string({required_error: 'You need to select a category'}),
    requiredSkills: z.string().array().nonempty({message: 'Required Skill must be at least 1 skill'}),
    jobDescription: z.string({required_error: 'Job Description is required'}).min(10, {message: 'Job Description must be at least 10 characters'}),
    responsibility: z.string({required_error: 'Job Description is required'}).min(10, {message: 'Job Description must be at least 10 characters'}),
    whoYouAre: z.string({required_error: 'Job Description is required'}).min(10, {message: 'Job Description must be at least 10 characters'}),
    niceToHaves: z.string({required_error: 'Job Description is required'}).min(10, {message: 'Job Description must be at least 10 characters'}),
    benefitS: z.object({benefit: z.string(), description: z.string()}).array().nonempty({message: 'Benefit must be at least benefit'})
})