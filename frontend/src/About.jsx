import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export default function About() {
    return(
        <section id="about" className='flex justify-center items-center text-center flex-wrap'>
            <div className="box m-8 p-4 border border-black rounded-md">
                <SupportAgentIcon className='mb-6'/>
                <p className='font-semibold text-sm mb-2'>Premium Support</p>
                <p className='text-sm'>Premium Customer Support 24/7</p>
            </div>
            <div className="box m-8 p-4 border border-black rounded-lg">
                <ViewInArIcon className='mb-6'/>
                <p className='font-semibold text-sm mb-2'>Fast Shipping</p>
                <p className='text-sm'>Fast Shipping within 2 days</p>
            </div>
            <div className="box m-8 p-4 border border-black rounded-md">
                <CreditCardIcon className='mb-6'/>
                <p className='font-semibold text-sm mb-2'>Easy Payment</p>
                <p className='text-sm'>Flexible Payment Options</p>
            </div>
            <div className="box m-8 p-4 border border-black rounded-md">
                <KeyboardReturnIcon className='mb-6'/>
                <p className='font-semibold text-sm mb-2'>Return Policy</p>
                <p className='text-sm'>Money Back Return Policy</p>
            </div>
        </section>
    );
};