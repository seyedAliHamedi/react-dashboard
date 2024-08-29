import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Header title="FAQ" subtitle="Frequently Asked Questions page" />
      {[1, 2, 3, 4, 5].map((e) => (
        <Accordion expanded={true}>
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              {`An Important Questions NUMBER: ${e}`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis, expedita? Veniam libero iste error quo ad illo
              repudiandae ipsum officia porro odio! Quisquam libero quo quae
              unde neque recusandae sequi?
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
