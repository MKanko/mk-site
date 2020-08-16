import React from "react";
import { Grid, Popup, Image } from "semantic-ui-react";

const SkillDetail = (props) => {
  const style = {
    borderRadius: "10px",
    opacity: 0.8
  };

  console.log(props)
  return (
    <Grid.Column textAlign="center" verticalAlign="middle">
      <Popup
        trigger={
            <picture>
            <source type="image/webp" srcSet={props.skill.attributes.image_web} />
                <source
                    className="background-image"
                    type="image/jpg"
                    srcSet={props.skill.attributes.image}
                />
                <Image
                    circular={props.circular}
                    alt={props.skill.attributes.name}
                    size="small"
                    verticalAlign="middle"
                    src={props.skill.attributes.image}
                />
            </picture>
        }
        header={props.skill.attributes.name}
        content={props.skill.attributes.description}
        style={style}
        size="mini"
        position="top center"
      />
    </Grid.Column>
  );
};

export default SkillDetail