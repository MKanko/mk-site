import React from "react";
import { Grid, Popup, Image } from "semantic-ui-react";

const SkillDetail = (props) => {
  const style = {
    borderRadius: "10px",
    opacity: 0.8
  };

  return (
    <Grid.Column textAlign="center" verticalAlign="middle">
      <Popup
        trigger={
            <picture>
            <source type="image/webp" srcSet={props.imageWeb} />
                <source
                    className="background-image"
                    type="image/jpg"
                    srcSet={props.image}
                />
                <Image
                    circular={props.circular}
                    alt={props.name}
                    size="small"
                    verticalAlign="middle"
                    src={props.image}
                />
            </picture>
        }
        header={props.name}
        content={props.description}
        style={style}
        size="mini"
        position="top center"
      />
    </Grid.Column>
  );
};

export default SkillDetail