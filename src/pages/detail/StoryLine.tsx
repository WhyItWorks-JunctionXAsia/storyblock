import React, { useEffect, useRef } from "react";
import { colorset } from "utils/styles";
import { StoryState } from "utils/utils";

// 2: selected, 1: pending, 0: failed

interface StoryLineProps {
  upperline: (number | null)[];
  underline: (number | null)[];
}

const StoryLine: React.FC<StoryLineProps> = ({ upperline, underline }) => {
  const xPos = [110, 364, 474];
  const height = 100;
  const radius = 15;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const rightBranch = (
    canvas: CanvasRenderingContext2D,
    upperSelected: number
  ) => {
    canvas.lineTo(xPos[upperSelected] - radius, height / 2);
    canvas.moveTo(xPos[upperSelected], height / 2 - radius);
    canvas.arc(
      xPos[upperSelected] - radius,
      height / 2 - radius,
      radius,
      0,
      0.5 * Math.PI
    );
    canvas.moveTo(xPos[upperSelected], height / 2 - radius);
    canvas.lineTo(xPos[upperSelected], 0);
  };

  const leftBranch = (
    canvas: CanvasRenderingContext2D,
    upperSelected: number
  ) => {
    canvas.lineTo(xPos[upperSelected] + radius, height / 2);
    canvas.arc(
      xPos[upperSelected] + radius,
      height / 2 - radius,
      radius,
      0.5 * Math.PI,
      1 * Math.PI
    );
    canvas.lineTo(xPos[upperSelected], 0);
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current.getContext("2d");

      if (canvas) {
        const upperSelected = upperline.findIndex((number) => number === 2);
        const underSelected = underline.findIndex((number) => number === 2);

        // 탈락한 스토리 연결하는 선
        canvas.beginPath();
        canvas.lineJoin = "round";
        canvas.lineWidth = 1;
        canvas.strokeStyle = "#A6A6A6";

        canvas.moveTo(xPos[underSelected], height);
        canvas.lineTo(xPos[underSelected], height / 2);

        upperline.forEach((upper, index) => {
          if (upper !== null) {
            canvas.moveTo(xPos[underSelected], height / 2);

            if (index === underSelected) {
              canvas.lineTo(xPos[index], 0);
            } else if (index > underSelected) {
              console.log("here");
              rightBranch(canvas, index);
            } else {
              leftBranch(canvas, index);
            }

            canvas.stroke();
          }
        });

        // 선택된 스토리 연결하는 선
        if (upperSelected !== -1) {
          canvas.beginPath();
          canvas.lineJoin = "round";
          canvas.lineWidth = 5;
          canvas.strokeStyle = "#EF995E";

          canvas.moveTo(xPos[underSelected], height);

          if (upperSelected === underSelected) {
            canvas.lineTo(xPos[upperSelected], 0);
          } else if (upperSelected > underSelected) {
            canvas.lineTo(xPos[underSelected], height / 2);
            rightBranch(canvas, upperSelected);
          } else {
            canvas.lineTo(xPos[underSelected], height / 2);
            leftBranch(canvas, upperSelected);
          }

          canvas.stroke();
        }
      }
    }
  }, [canvasRef.current]);

  return (
    <canvas
      ref={canvasRef}
      width="726px"
      height="100px"
      style={{ display: "block" }}
    />
  );
};

export default StoryLine;
