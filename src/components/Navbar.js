import Flex from "./Flex";
import Image from "./Image";
import List from "./List";
import ListItem from "./ListItem";
import { FaBars } from "react-icons/fa"
import { useEffect, useState } from "react";
import Container from "./Container";


const Navbar = () => {

    let [showNavList, setShowNavList] = useState(true)

    useEffect(() => {
        function changeWidth() {
            if (window.innerWidth < 1024) {
                setShowNavList(false)
            }
            else {
                setShowNavList(true)
            }
        }

        changeWidth()

        window.addEventListener('resize', changeWidth)
    }, [])

    return (
        <Container>
            <nav className="py-8">
                <Flex className={' lg:flex lg:items-center'}>
                    <div className="lg:w-1/5">
                        <Image source={'Logo.png'}></Image>
                    </div>

                    <div className="lg:w-4/5 w-full">

                        <FaBars onClick={() => { setShowNavList(!showNavList) }} className="ml-auto block lg:hidden absolute top-8 right-2.5" />
                        {showNavList && (
                            < List className={'lg:flex lg:justify-end lg:gap-x-10 mt-5 lg:mt-0'}>
                                <ListItem className={'font-dm-sans text-nav-text hover:font-bold text-black my-2.5 lg:my-0 duration-150 ease-in'} item={'Home'}></ListItem>
                                <ListItem className={'font-dm-sans text-nav-text hover:font-bold text-black my-2.5 lg:my-0 duration-150 ease-in'} item={'Shop'}></ListItem>
                                <ListItem className={'font-dm-sans text-nav-text hover:font-bold text-black my-2.5 lg:my-0 duration-150 ease-in'} item={'About'}></ListItem>
                                <ListItem className={'font-dm-sans text-nav-text hover:font-bold text-black my-2.5 lg:my-0 duration-150 ease-in'} item={'Contacts'}></ListItem>
                                <ListItem className={'font-dm-sans text-nav-text hover:font-bold text-black my-2.5 lg:my-0 duration-150 ease-in'} item={'Journal'}></ListItem>
                            </List>
                        )}

                    </div>

                </Flex>
            </nav >
        </Container>
    )
}

export default Navbar