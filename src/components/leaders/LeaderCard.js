import React from 'react'

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const LeaderCard = ({ img, name, text}) => {
  return (
    <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={img}
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {name}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {text}
        </Typography>
      </CardBody>
    </Card>
  )
}

export default LeaderCard