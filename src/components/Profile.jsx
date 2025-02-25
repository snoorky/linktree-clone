import Icon from "./Icon"

export default function Profile() {
  const profile = {
    image: "https://avatars.githubusercontent.com/u/63130730",
    name: "Raphael Vitor",
    description: "Building ideas, coding dreams",
    isVerificated: true,
  }

  return (
    <div className="flex flex-col items-center mb-8">
      <img className="w-24 h-24 mb-4 rounded-full" src={profile.image} alt="Profile Image" />
      <div className="flex items-center mb-2">
        <h1 className="mr-2 text-xl font-semibold text-white">{profile.name}</h1>
        {profile.isVerificated && <Icon name="verificated" className="w-5 h-5" />}
      </div>
      <p className="text-sm text-white text-center">{profile.description}</p>
    </div>
  )
}
