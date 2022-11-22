import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerMainLayout = styled(motion.div)`
  margin: auto;
  max-width: 956px;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  img {
    width: 100%;
    object-fit: contain;
  }

  .cards {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .container_eye {
    display: flex;
  }

  .eye {
    max-width: 350px;
    position: relative;

    overflow: hidden;
    .left_side_eye {
      width: 100%;
      transform: translateX(50%);
    }
    .right_side_eye {
      width: 100%;
      transition: all ease 0.2s;
      transform: scaleX(-1) translateX(50%);
      animation: change_lens_colors alternate-reverse 1s infinite;
    }
  }

  @keyframes change_lens_colors {
    0% {
      filter: brightness(100%);
    }
    50% {
      filter: brightness(80%);
    }
    100% {
      filter: brightness(100%);
    }
  }
`;
