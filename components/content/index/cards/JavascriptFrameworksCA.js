import Image from "next/image";

function JavascriptFrameworksCA() {
  return (
    <div className="card flex flex-col border border-gray-500 bg-gray-100">

      <h3><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>Rick & Morty</h3>

      <div className="px-10">

        <div className="relative">
          <Image src="/assets/images/project-js-frameworks.png" height="3445px" width="2914px" objectFit="cover" objectPosition="top" alt="" />
        </div>

        <div className="links flex justify-evenly my-7 text-blue-700">
          <a href="https://github.com/MariusHesby/rickandmorty">Github</a>
          <a href="https://mariushesby-rickandmorty.netlify.app/">Live</a>
        </div>

        <p>School project: find an api and return an array. Create a login page using Wordpress. Use Next.js.</p>
        <p>Javascript Frameworks Course Assignment</p>
      </div>

    </div>
  );
}

export default JavascriptFrameworksCA;