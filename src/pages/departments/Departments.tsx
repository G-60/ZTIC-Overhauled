import { useEffect } from 'react';
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// imgs
import eng from '@/assets/images/departmentimgs/engineering.jpg'
import fin from '@/assets/images/departmentimgs/financ.jpg'
import media from '@/assets/images/departmentimgs/media.jpg'
import it from '@/assets/images/departmentimgs/it.jpg'
import logo from '@/assets/icons/ztic_logo.png'
import { NavLink } from 'react-router';

export default function Departments() {
        useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
        }, []);
    
    return (
        <>
        <NavBar />
        <main className='w-full h-fit p-20'>
            <div className='flex flex-col-reverse justify-center items-center gap-y-3 mb-5'>
                <h1 className='text-3xl font-medium'>Departments</h1>
                <img src={logo} alt="zitc logo" width={150} />
            </div>
            <div className='grid justify-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3'>
            <Card sx={{ maxWidth: 250 }}>
            <CardMedia className='hover:scale-105 transition-all'
                sx={{ height: 150 }}
                image={fin}
                title="money image"
            />
            <CardContent>
                <Typography gutterBottom textAlign={'center'} variant="h5" component="div">
                Financial and Administrative Sciences
                </Typography>
            </CardContent>
            <CardActions className='flex flex-col gap-2'>
                <Button size="small">E-Business Management</Button>
                <Button size="small">Technical Accounting</Button>
                <Button size="small">Applied English Language</Button>
                <Button size="small">Tax and Customs Sciences</Button>
            </CardActions>
            </Card>

            <Card sx={{ maxWidth: 250 }}>
            <CardMedia className='hover:scale-105 transition-all'
                sx={{ height: 150 }}
                image={eng}
                title="machine image"
            />
            <CardContent>
                <Typography gutterBottom textAlign={'center'} variant="h5" component="div">
                Engineering
                </Typography>
            </CardContent>
            <CardActions className='flex flex-col gap-2'>
                <Button size="small">Renewable Energy Technology</Button>
                <Button size="small">Electric and Hybrid Vehicle Maintenance</Button>
                <Button size="small">Architecture and Interior Design</Button>
            </CardActions>
            </Card>

            <Card sx={{ maxWidth: 250 }}>
            <CardMedia className='hover:scale-105 transition-all'
                sx={{ height: 150 }}
                image={media}
                title="Camera image"
            />
            <CardContent >
                <Typography gutterBottom textAlign={'center'} variant="h5" component="div">
                Applied Arts
                </Typography>
            </CardContent>
            <CardActions className='flex flex-col gap-2'>
                <Button size="small">Digital Media</Button>
                <Button size="small">Animation Arts</Button>
            </CardActions>
            </Card>
            
            <Card sx={{ maxWidth: 250 }}>
            <CardMedia className='hover:scale-105 transition-all'
                sx={{ height: 150 }}
                image={it}
                title="javascript code"
            />
            <CardContent>
                <Typography gutterBottom textAlign={'center'} variant="h5" component="div">
                Information Technology
                </Typography>
            </CardContent>
            <CardActions className='flex flex-col gap-2'>
                <Button size="small">Artificial Intelligence and Robotics Engineering</Button>
                <Button size="small">
                    <NavLink to="/Departments/Cybersecurity/About">
                    Cyber Security
                    </NavLink>
                    </Button>
            </CardActions>
            </Card>
            </div>
        </main>
        <Footer />
        </>
    )
}