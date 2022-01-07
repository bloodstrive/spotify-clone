import NextLink from  "next/link"
import {Box,List,ListIcon,ListItem,Divider,Center,LinkBox,LinkOverlay} from "@chakra-ui/layout";

const MenuItem =({menu})=>(
    <Box marginY="20px">
                    <List spacing={2}>
                        {menu.map(item =>(
                            <ListItem paddingX="20px" fontSize="16px" key={item.name}>
                                <LinkBox>
                                    <NextLink href={item.route} passHref>
                                        <LinkOverlay>
                                            <ListIcon as={item.icon} color="white" marginRight="20px"/>
                                            {item.name}
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
            </Box>
)
export default MenuItem
