import React, { useState } from "react";
import { Box, MobileStepper, Typography, Button } from "@mui/material";

// react icons import
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

// 3rd party
import SwipeableViews from "react-swipeable-views";

// react icons
import { AiFillSketchSquare, AiFillStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

// styles import
import {
  flexBetween,
  dFlex,
  carouselDot,
  carouselImage,
  fixedBottom,
  fixedIcon,
} from "../../theme/commonStyles";

import "./CardCarousel.css";

const CardCarousel = ({ location }) => {
  const [activeStep, setActiveStep] = useState(0);

  const maxStep = location.locationImages.length;

  const prevActiveStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const nextActiveStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box className="carouselCard" sx={{ flexGrow: 1, position: "relative" }}>
      <Box sx={fixedIcon}>
        <FaRegHeart size={24} color="#fff" />
      </Box>
      {location.locationImages.length && (
        <SwipeableViews
          axis={"x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {location.locationImages.map((step, index) => (
            <div key={step.id}>
              <Box
                component="img"
                alt={step.id}
                src={step.url}
                sx={carouselImage}
              ></Box>
            </div>
          ))}
        </SwipeableViews>
      )}
      <Box sx={fixedBottom}>
        <MobileStepper
          sx={{ backgroundColor: "transparent" }}
          steps={maxStep}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={nextActiveStep}
              disabled={activeStep === maxStep - 1}
              sx={carouselDot}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={prevActiveStep}
              disabled={activeStep === 0}
              sx={carouselDot}
            >
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </Box>
      <Box sx={flexBetween}>
        <Box sx={{ mt: 2 }}>
          <Typography component="h3">{location.location} </Typography>
          <Typography component="h4">{location.days} </Typography>
          <Typography component="h5">{location.price} </Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Box sx={dFlex}>
            {location.isNew ? (
              <>
                <Typography component="h5">New</Typography>
                <AiFillStar size={18} />
              </>
            ) : (
              <>
                <Typography component="h5">{location.rating} </Typography>
                <AiFillStar />
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardCarousel;
