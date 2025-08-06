import profilePicture from "../assets/profile.jpg"

export default function Profile() {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-10 bg-gradient-to-tr from-pink-100 via-white to-blue-100">
      {/* profile frame */}
      <div className="flex flex-col items-center w-full max-w-4xl gap-6 md:flex-row md:items-start md:gap-10">
        {/* profile pic */}
        <img
          src={profilePicture}
          alt="profile"
          className="object-cover w-24 h-24 rounded-full md:w-32 md:h-32"
        />

        {/* profile data */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-semibold">Palak Jindal</h1>

          <div className="flex justify-center gap-8 mt-4 md:justify-start">
            <div className="flex flex-col items-center">
              <p className="font-medium">32</p>
              <p className="text-sm text-gray-600">Posts</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-medium">312</p>
              <p className="text-sm text-gray-600">Followers</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-medium">32</p>
              <p className="text-sm text-gray-600">Following</p>
            </div>
          </div>
        </div>
      </div>

      {/* gallery */}
      <div className="grid w-full max-w-4xl grid-cols-3 gap-2 mt-10 md:gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <img
            key={i}
            src={profilePicture}
            alt={`profile-${i}`}
            className="object-cover w-full border aspect-square"
          />
        ))}
      </div>
      {/* gallery */}
      {/* <div className="grid w-full max-w-md grid-cols-3 gap-2 mt-10">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <img
            key={i}
            src={profilePicture}
            alt={`profile-${i}`}
            className="object-cover w-full border aspect-square"
          />
        ))}
      </div> */}
    </div>
  )
}
