import { Box, Button, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  return (
    <footer className="layout__footer">
      <Box
        paddingBottom={2}
        paddingTop={2}
        textAlign={"center"}
        bgcolor={theme.palette.primary.dark}
        color={"white"}
      >
        <span>© 2023 MARVEL</span>
        <Button style={{ color: "white" }} href="http://marvel.com">
          Data provided by Marvel. © 2023 MARVEL
        </Button>
      </Box>
    </footer>
  );
}
