export default function Card({props}) {
  return (
    <div className="m-10 items-center bg-gray-100">
      <div className="rounded-2xl bg-white p-6 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Card"
          className="h-48 w-full rounded-xl object-cover"
        />

        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          {props.name}
        </h2>

        <p className="mt-2 text-gray-600">
          {props.DOB}
          {props.hobbies}
          {props.age}
        </p>

        <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          {props.button}
        </button>
      </div>
    </div>
  );
}