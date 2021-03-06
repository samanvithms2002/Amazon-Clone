import Image from "next/image";
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";
export default function Header() {
	return (
		<header>
			{/* Top nav */}
			<div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
				<div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
					<Image
						src='https://links.papareact.com/f90'
						width={150}
						height={40}
						objectFit='contain'
						className='cursor-pointer'
					/>
				</div>
				<div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 '>
					<input
						type='text'
						className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
					/>
					<SearchIcon className='h-12 p-4' />
				</div>

				<div className='text-white flex items-center space-x-6 mx-6 text-xs whitespace-nowrap '>
					<div className='link'>
						<p>Hello Samanvith</p>
						<p className='font-extrabold md:text-sm'>Account & List</p>
					</div>
					<div className='link'>
						<p>Returns</p>
						<p className='font-extrabold md:text-sm'>& orders</p>
					</div>
					<div className='link flex items-center relative'>
						<span className='absolute top-0 right-0 h-4 w-4 text-center md:right-10 bg-yellow-400 rounded-full '>
							0
						</span>
						<ShoppingCartIcon className='h-10 md:inline' />
						<p className='font-extrabold hidden md:text-sm md:inline'>Basket</p>
					</div>
				</div>
			</div>
			{/* Bottom nav */}
			<div className='flex items-center text-sm bg-amazon_blue-light text-white p-2 space-x-3 md:space-x-5'>
				<p className='flex items-center'>
					<MenuIcon className='h-6 mr-1' />
					All
				</p>
				<p className='link'>Prime Video</p>
				<p className='link'>Amazon Business</p>
				<p className='link'>Today's Deal</p>
				<p className='hidden link md:inline-flex'>Electronics</p>
				<p className='hidden link md:inline-flex'>Food & Grocery</p>
				<p className='hidden link md:inline-flex'>Prime</p>
				<p className='hidden link md:inline-flex'>Buy Again</p>
				<p className='hidden link md:inline-flex'>Shopper Toolkit</p>
				<p className='hidden link md:inline-flex'>Health & Personal Care</p>
			</div>
			<div></div>
		</header>
	);
}
