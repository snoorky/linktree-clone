import Icon from "./Icon"

export default function Profile() {
  const profile = {
    image: "https://ugc.production.linktr.ee/Cv6sPO53RYKanyi32OQP_lr3NT26P1DTlco2u?io=true&size=avatar-v3_0",
    name: "Shanon Cary",
    description: "Hard times, hard techno",
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
