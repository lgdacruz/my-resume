import Link from "next/link";
import { GenericContainer, Section, TheLink } from "./style";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaTiktok, FaTwitch } from "react-icons/fa";

export default function Social() {
  return (
    <Section fd="row" gap="2rem" selfA="center">
      <TheLink
        href="https://www.youtube.com/channel/UCDGLjzabaHGOMHbgsoFAOew"
        target="_blank"
      >
        <AiFillYoutube size={30} />
        YouTube
      </TheLink>
      <TheLink href="https://www.tiktok.com/@lgdacruz" target="_blank">
        <FaTiktok size={30} />
        TikTok
      </TheLink>
      <TheLink href="https://www.instagram.com/lgdacruz/" target="_blank">
        <AiFillInstagram size={30} />
        Instagram
      </TheLink>
      <TheLink href="https://github.com/lgdacruz" target="_blank">
        <AiFillGithub size={30} />
        GitHub
      </TheLink>
      <TheLink href="https://www.linkedin.com/in/cruxzx/" target="_blank">
        <AiFillLinkedin size={30} />
        Linkedin
      </TheLink>
      <TheLink href="https://www.twitch.tv/dacruzxz" target="_blank">
        <FaTwitch size={30} />
        Twitch
      </TheLink>
    </Section>
  );
}
