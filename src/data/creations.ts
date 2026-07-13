import deepEarthDesktop from "../assets/images/desktop/image-deep-earth.jpg"
import deepEarthMobile from "../assets/images/mobile/image-deep-earth.jpg"
import nightArcadeDesktop from "../assets/images/desktop/image-night-arcade.jpg"
import nightArcadeMobile from "../assets/images/mobile/image-night-arcade.jpg"
import soccerTeamDesktop from "../assets/images/desktop/image-soccer-team.jpg"
import soccerTeamMobile from "../assets/images/mobile/image-soccer-team.jpg"
import gridDesktop from "../assets/images/desktop/image-grid.jpg"
import gridMobile from "../assets/images/mobile/image-grid.jpg"
import fromAboveDesktop from "../assets/images/desktop/image-from-above.jpg"
import fromAboveMobile from "../assets/images/mobile/image-from-above.jpg"
import pocketBorealisDesktop from "../assets/images/desktop/image-pocket-borealis.jpg"
import pocketBorealisMobile from "../assets/images/mobile/image-pocket-borealis.jpg"
import curiosityDesktop from "../assets/images/desktop/image-curiosity.jpg"
import curiosityMobile from "../assets/images/mobile/image-curiosity.jpg"
import fisheyeDesktop from "../assets/images/desktop/image-fisheye.jpg"
import fisheyeMobile from "../assets/images/mobile/image-fisheye.jpg"


export type Creation = {
  id: string
  title: string
  desktop: string
  mobile: string
}

export const creations: Creation[] = [
  {
    id: "deep-earth",
    title: "Deep earth",
    desktop: deepEarthDesktop,
    mobile: deepEarthMobile,
  },
  {
    id: "night-arcade",
    title: "Night arcade",
    desktop: nightArcadeDesktop,
    mobile: nightArcadeMobile,
  },
  {
    id: "soccer-team",
    title: "Soccer team VR",
    desktop: soccerTeamDesktop,
    mobile: soccerTeamMobile,
  },
  {
    id: "grid",
    title: "The grid",
    desktop: gridDesktop,
    mobile: gridMobile,
  },
  {
    id: "from-above",
    title: "From up above VR",
    desktop: fromAboveDesktop,
    mobile: fromAboveMobile,
  },
  {
    id: "pocket-borealis",
    title: "Pocket borealis",
    desktop: pocketBorealisDesktop,
    mobile: pocketBorealisMobile,
  },
  {
    id: "curiosity",
    title: "The curiosity",
    desktop: curiosityDesktop,
    mobile: curiosityMobile,
  },
  {
    id: "fisheye",
    title: "Make it fisheye",
    desktop: fisheyeDesktop,
    mobile: fisheyeMobile,
  },
]
