"use client"
import Link from 'next/link'

const Header = () => {
    return(
        <nav
            className="flex-no-wrap relative flex w-full items-center justify-between bg-[#032541] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
        >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div
            className="flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
        >
            <Link href="/">
                <div
                    className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                    >
                    <img
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                        style={{height: "15px"}}
                        alt="TMDB"
                        loading="lazy" 
                    />
                </div>
            </Link>
        <ul
            className="invisible lg:visible list-style-none  flex pl-0 lg:flex-row"
        >
        <li className=" lg:mb-0 lg:pr-2">
            <a
                className="text-neutral-100 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                href="#"
            > 
            Movies
            </a>
        </li>
        <li className=" lg:mb-0 lg:pr-2">
            <a
            className="text-neutral-100 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="#"
        
            >TV Shows
            </a>
        </li>
        <li className=" lg:mb-0 lg:pr-2">
            <a
                className="text-neutral-100 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#"
            >
                People
            </a>
        </li>
        </ul>
        </div>
        
        </div>
        </nav>
        )
    }
    
    export default Header;