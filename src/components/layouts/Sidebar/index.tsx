import React, {FC} from 'react';
import {Button} from '@/components/ui/button';
import { AiOutlineHome} from "react-icons/ai";
import { HiOutlineBuildingOffice2, HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { BsPeople } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { PiGear } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";

interface sidebarProps {

}

const Sidebar: FC<sidebarProps> = ({}) => {
    return (
        <div className='pb-12 min-h-screen'>
            <div className='space-y-4 py-4'>
                <div className='px-3 py-2'>
                    <h2 className='mb-2 px-4 text-lg font-semibold'>Dashboard</h2>
                    <div>
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-purple-500'>
                            <AiOutlineHome className='mr-2 text-lg'/> Home
                        </Button>
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-purple-500'>
                            <IoMailOutline className='mr-2 text-lg'/> Message
                        </Button>
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-purple-500'>
                            <HiOutlineBuildingOffice2 className='mr-2 text-lg'/> Company Profile
                        </Button>
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-purple-500'>
                            <BsPeople className='mr-2 text-lg'/> All Applicants
                        </Button>
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-purple-500'>
                            <HiOutlineClipboardDocumentList className='mr-2 text-lg'/> Job Listing
                        </Button>
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-purple-500'>
                            <LuCalendarDays className='mr-2 text-lg'/> My Schedule
                        </Button>
                    </div>
                </div>
            </div>
            <div className='space-y-4 py-4'>
                <div className='px-3 py-2'>
                <h2 className='mb-2 px-4 text-lg font-semibold'>Settings</h2>
                    <div>
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-purple-500'>
                                <PiGear className='mr-2 text-lg'/> Settings
                        </Button>
                        <Button variant={'ghost'} className='w-full text-red-500 justify-start rounded-none hover:bg-red-500 hover:text-white'>
                                <FiLogOut className='mr-2 text-lg'/> Logout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;