import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Dropdown from './Dropdown'
import Flex from './Flex'
import { FaBars, FaUserAlt, FaShoppingCart } from "react-icons/fa"
import { GoSearch } from "react-icons/go"
import { AiFillCaretDown } from "react-icons/ai"
import { ImCross } from "react-icons/im"
import ListItem from './ListItem'
import List from './List'
import Searchbar from './Searchbar'
import Image from './Image'
import { Link } from 'react-router-dom'

const Header = () => {

    let [categoryDropDownshow, setCategoryDropDownshow] = useState(false)
    let [userDropDownshow, setUserCategoryDropDownshow] = useState(false)
    let [cartDropDownshow, setCartDropDownshow] = useState(false)

    let caterogyDropDownref = useRef()
    let userDropDownref = useRef()
    let cartDropDownref = useRef()

    useEffect(() => {
        document.body.addEventListener('click', (item) => {
            if (caterogyDropDownref.current.contains(item.target)) {
                setCategoryDropDownshow(true)
            }
            else {
                setCategoryDropDownshow(false)
            }

            if (userDropDownref.current.contains(item.target)) {
                setUserCategoryDropDownshow(true)
            }
            else {
                setUserCategoryDropDownshow(false)
            }

            if (cartDropDownref.current.contains(item.target)) {
                setCartDropDownshow(true)
            }
            else {
                setCartDropDownshow(false)
            }
        })
    }, [])

    return (
        <div className='bg-[#F5F5F3] py-6'>
            <Container>
                <Flex className={'flex justify-between items-center '}>
                    <div>
                        <Dropdown classname={'relative z-50'} dropRef={caterogyDropDownref}>
                            <Flex className={'flex gap-x-2.5 items-center'}>
                                <FaBars className='' />
                                <p className='font-dm-sans font-regular text-sm'><span className='hidden lg:inline-block'>Shop by Category</span></p>
                            </Flex>
                            {categoryDropDownshow &&

                                <List className={'font-dm-sans font-regular text-sm absolute top-8 bg-matt w-[263px] text-gray-400'}>
                                    <ListItem className={'px-5 py-4 border-b border-solid border-[#2D2D2D] hover:text-white hover:px-8 hover:font-bold duration-150 ease-in'} item={'Accesories'}></ListItem>
                                    <ListItem className={'px-5 py-4 border-b border-solid border-[#2D2D2D] hover:text-white hover:px-8 hover:font-bold duration-150 ease-in'} item={'Furniture'}></ListItem>
                                    <ListItem className={'px-5 py-4 border-b border-solid border-[#2D2D2D] hover:text-white hover:px-8 hover:font-bold duration-150 ease-in'} item={'Electronics'}></ListItem>
                                    <ListItem className={'px-5 py-4 border-b border-solid border-[#2D2D2D] hover:text-white hover:px-8 hover:font-bold duration-150 ease-in'} item={'Clothes'}></ListItem>
                                    <ListItem className={'px-5 py-4 border-b border-solid border-[#2D2D2D] hover:text-white hover:px-8 hover:font-bold duration-150 ease-in'} item={'Bags'}></ListItem>
                                    <ListItem className={'px-5 py-4 border-b border-solid border-[#2D2D2D] hover:text-white hover:px-8 hover:font-bold duration-150 ease-in'} item={'Home appliances'}></ListItem>
                                </List>
                            }

                        </Dropdown>
                    </div>
                    <div className='w-auto relative md:w-[600px]'>
                        <GoSearch className='absolute w-4 top-5 right-4' />
                        <Searchbar className='w-full px-5 py-4 placeholder:font-dm-sans placeholder:font-regular placeholder:text-sm placeholder:text-[#C4C4C4]' placeholder={'Search Products'} />
                    </div>
                    <Flex className={'flex items-center gap-10 ml-3'}>
                        <Dropdown classname={'relative z-50'} dropRef={userDropDownref}>
                            <Flex className={'flex items-center gap-2'}>
                                <FaUserAlt />
                                <AiFillCaretDown />
                            </Flex>

                            {userDropDownshow &&

                                <List className={'font-dm-sans font-regular text-sm absolute top-8 right-0 bg-white w-[200px] text-gray-400 text-center'}>
                                    <ListItem className={'px-5 py-4 border-b border-solid border-[#F0F0F0] text-[#262626] hover:text-white hover:bg-matt hover:font-bold duration-150 ease-in'} item={'My Account'}></ListItem>
                                    <ListItem className={'px-5 py-4 border-b border-solid border-[#F0F0F0] text-[#262626] hover:text-white hover:bg-matt  hover:font-bold duration-150 ease-in'} item={'Log Out'}></ListItem>
                                    
                                </List>
                            }


                        </Dropdown>
                        <Dropdown classname={'relative z-50'} dropRef={cartDropDownref}>
                            <FaShoppingCart />
                            {cartDropDownshow &&

                                <div className='absolute top-8 right-0 w-[360px] bg-white border border-solid border-[#F0F0F0]'>
                                    <div className='bg-[#F5F5F3]'>
                                        <Flex className={'flex p-5 items-center justify-between'}>
                                            <Image className={'border border-solid border-[#D8D8D8] w-20 h-20'} source={'cart-item.png'} />
                                            <div className='w-3/5'>
                                                <h3 className='font-dm-sans font-bold text-sm'>Black Smart Watch</h3>
                                                <p className='mt-4 font-dm-sans font-bold text-sm'>$44.00</p>
                                            </div>
                                            <ImCross className='w-2.5'/>
                                        </Flex>

                                        
                                    </div>

                                    <div className='bg-white p-5'>
                                        <h4 className='font-dm-sans font-regurlar text-base text-[#767676]'>Subtotal: <span className='font-dm-sans font-bold text-base text-matt'>$44.00</span></h4>

                                        <Flex className={'flex justify-between mt-3'}>
                                            <Link to={'#'} className={'inline-block py-4 px-10 border border-solid border-matt bg-white font-dm-sans font-bold text-sm text-matt hover:bg-matt hover:text-white duration-150 ease-in'}>View Cart</Link>
                                            <Link to={'#'} className={'inline-block py-4 px-10 border border-solid border-matt bg-white font-dm-sans font-bold text-sm text-matt hover:bg-matt hover:text-white duration-150 ease-in'}>Checkout</Link>
                                        </Flex>
                                    </div>
                                </div>
                            }
                        </Dropdown>
                    </Flex>
                </Flex>
            </Container>

        </div>
    )
}

export default Header