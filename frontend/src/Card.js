import logo from './logo.svg';
import './App.css';

function Card(props) {
    const {
        // might change architecture...
        name = "No Name",
        first = "first",
        second = "second",
        third = "third"
    } = props
  return (
    <div class="bg-white rounded-lg shadow-2xl">
        <div className="flex flex-col items-center space-y-10 text-black bg-green-200 rounded-t-lg font-bold text-2xl py-5 px-8">
            <img
                src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
                alt="baby with headphones"
                className="border shadow-xl w-20 h-20 rounded-full object-cover"
            />
            {name}
        </div>

        <div class="text-left text-black py-5 px-6">

        <div className='flex justify-between'>
                <div>
                    First:
                </div> 
                <div>{first}</div>
            </div>
            <div className='flex justify-between'>
                <div>
                    Second:
                </div> 
                <div>{second}</div>
            </div>

            <div className='flex justify-between'>
                <div>
                    Third:
                </div> 
                <div>{third}</div>
            </div>

            {/* <div class="text-center">
                <button class="mt-4 rounded-lg px-4 py-2 bg-blue-500 text-blue-50 shadow hover:shadow-xl duration-300">
                    Get Started
                </button>
            </div> */}
        </div>
    </div>
  );
}

export default Card;
