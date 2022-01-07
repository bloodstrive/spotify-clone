import NextImage from "next/image"
import NextLink from  "next/link"
import MenuItem from "./menuItem.tsx"
import {Box,List,ListIcon,ListItem,Divider,Center,LinkBox,LinkOverlay} from "@chakra-ui/layout";
import {MdHome,MdSearch,MdLibraryMusic,MdPlaylistAdd,MdFavorite} from "react-icons/md";

const navMenu = [
    {
        name: "Home",
        icon: MdHome,
        route: "/"
    },
    {
        name: "Search",
        icon: MdSearch,
        route: "/search"
    },
    {
        name: "Your Library",
        icon: MdLibraryMusic,
        route: "/library"
    }
]

const musicMenu =[
    {
        name: "Create playlist",
        icon: MdPlaylistAdd,
        route: "/"
    },
    {
        name: "Favorites",
        icon: MdFavorite,
        route: "/favorites"
    },
]

const playlists = new Array(30).fill(1).map((_,i)=> `Playlist ${i+1}`)


const Sidebar = () => {
    return(
        <Box 
            width="100%"
            height="calc(100vh - 100px)"
            bg="black"
            paddingX="5px"
            color="gray"
        >
            <Box paddingY="20px" height="100%">
                <Box width="120px" marginBottom="20px" paddingX="20px">
                    <NextImage src="/logo.svg" height={60} width={120}/>
                </Box>
                <MenuItem menu={navMenu}/>
                <MenuItem menu={musicMenu}/>
                <Divider color="gray.800"/>
                <Box height="66%" overflowY="auto" paddingY="20px">
                    <List spacing={2}>
                        {playlists.map((playlist)=> (
                            <ListItem paddingX="20px" key={playlist}>
                                <LinkBox>
                                    <NextLink href="/" passHref>
                                        <LinkOverlay>
                                            {playlist}
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    )
}
export default Sidebar;
