function StartButton() {
  return (
    <div>
    <button class="mt-4 rounded-lg px-8 py-2 bg-green-500 text-blue-50 shadow hover:shadow-xl duration-300">
                    Upload File
    </button>
    <form action="/action_page.php">
    <input type="file" id="myFile" name="filename"/>
    <input type="submit"/>
  </form>
  </div>
  );
}

export default StartButton;
