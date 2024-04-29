"use client"

import { jobFormSchema } from '@/lib/form-schema';
import React, {FC} from 'react';
import { useForm } from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeftIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Form } from '@/components/ui/form';
import FieldInput from '../../components/organisms/Fieldinput/index';
import { FormItem } from '@/components/ui/form';
import { FormControl } from '@/components/ui/form';
import { Input } from "@/components/ui/input"
import { FormMessage } from '@/components/ui/form';
import { FormField } from '@/components/ui/form';
import { FormDescription } from '@/components/ui/form';

interface PostJobPageProps {}

const PostJobPage: FC<PostJobPageProps> = ({}) => {

    const form = useForm<z.infer<typeof jobFormSchema>>({
        resolver: zodResolver(jobFormSchema),
        defaultValues: {
            requiredSkills: [],
        },
    });

    const onSubmit = (val: z.infer<typeof jobFormSchema>) => {
        console.log(val);
    }

    return (
        <div>
            <div className='inline-flex items-center gap-2 cursor-pointer hover:text-primary'>
                <ArrowLeftIcon className='w-7 h-7'/>
                <span className='text-2xl font-semibold'>Post a Job</span>
            </div>

            <div className='my-5'>
                <div className='text-lg font-semobold'>Basic Information</div>
                <div className='text-gray-500'>List out your top parks and benefits.</div>
            </div>
    
            <Separator />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='mt-5 space-y-6 pt-6'>
                    <FieldInput title="Job Title" subtitle='Job title must be describe on position'>
                    <FormField
          control={form.control}
          name="roles"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className='w-[450px]' placeholder="e.g. Software Engineer" {...field} />
              </FormControl>
              <FormDescription>
                At least 80 Characters
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
                    </FieldInput>
                </form>
            </Form>
            <Separator />
        </div>
    )
}

export default PostJobPage;