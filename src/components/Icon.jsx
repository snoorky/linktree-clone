import DotsIcon from '../assets/icons/dots.svg?react'
import InstagramIcon from '../assets/icons/instagram.svg?react'
import SpotifyIcon from '../assets/icons/spotify.svg?react'
import TikTokIcon from '../assets/icons/tiktok.svg?react'
import TwitterIcon from '../assets/icons/twitter.svg?react'
import VerificatedIcon from '../assets/icons/verificated.svg?react'
import YoutubeIcon from '../assets/icons/youtube.svg?react'

const icons = {
  dots: DotsIcon,
  instagram: InstagramIcon,
  spotify: SpotifyIcon,
  tiktok: TikTokIcon,
  twitter: TwitterIcon,
  verificated: VerificatedIcon,
  youtube: YoutubeIcon,
}

const Icon = ({ name, url, className = "" }) => {
  const IconComponent = icons[name]

  if (!IconComponent) return null

  return <a href={url} target="_blank" rel="noopener"><IconComponent className={className} /></a>
}

export default Icon
