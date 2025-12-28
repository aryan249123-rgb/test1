export default function Dashboard() {
  return (
    <div className=" flex flex-col justify-center items-center h-screen w-full">
      <div className="border-2 p-2 rounded-2xl">
        <div>
          Name: <span className="font-bold">Aryan</span>
        </div>
        <div>
          Email: <span className="font-bold">aryan24912@gmail.com</span>
        </div>
        <button className="bg-red-400">Logout</button>
      </div>
    </div>
  );
}
