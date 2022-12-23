import { Box } from '@mui/material'
import Brand from './Brand'
import Menu from './Menu'
import Footer from './Footer'




const Sidebar = () => {
        return (
                <Box sx={{ backgroundColor: "#3f50b5" }}>
                        <Box height="10vh">
                                <Brand />
                        </Box>
                        <Box height="70vh">
                                <Menu />
                        </Box>
                        <Box height="20vh">
                                <Footer />
                        </Box>
                </Box>
        )
}

export default Sidebar