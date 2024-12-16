import IconHeart5 from '@/Components/IconHeart5';
import IconShop8 from '@/Components/IconShop8';
import IconBook8 from '@/Components/IconBook8';
import IconVideo8 from '@/Components/IconVideo8';

const Home = () => {
  return (
    <>
      <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6">
            <div className="flex items-center">
              <IconBook8 />
              <div className="ml-4 text-lg leading-7 font-semibold">
                <a
                  href="https://laravel.com/docs"
                  className="underline text-gray-900 dark:text-white"
                >
                  Home11
                </a>
              </div>
            </div>

            <div className="ml-12">
              <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                {' '}
                <ul>
                  <li>
                    a11ul    <a href="wel" className="underline"> wel
                    </a>
                  </li>

                  <li>
                    b11ul    <a href="vel/TutorialsPoint" className="underline">name
                    </a>
                  </li>
                  <li>
                    c11ul    <a href="/user/profile" className="underline"> profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
            <div className="flex items-center">

              <IconVideo8 />
              <div className="ml-4 text-lg leading-7 font-semibold">
                <a
                  href="https://laracasts.com"
                  className="underline text-gray-900 dark:text-white"
                >
                  Home12
                </a>
              </div>
            </div>

            <div className="ml-12">
              <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                <ol>
                  <li>
                    a12ol    <a href="/register" className="underline"> Register
                    </a>

                  </li>
                  <li>
                    b12ol    <a href="/register" className="underline"> Register
                    </a>
                  </li>

                  <li>
                    c12ol    <a href="/register" className="underline"> Register
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <IconBook8 />
              <div className="ml-4 text-lg leading-7 font-semibold">
                <a
                  href="https://laravel-news.com/"
                  className="underline text-gray-900 dark:text-white"
                >
                  Home21
                </a>
              </div>
            </div>

            <div className="ml-12">
              <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                VV  {' '}
                <a href="register" className="underline">
                  Register
                </a>
                {' '} {'UU'}, and more.
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
            <div className="flex items-center">
              <IconShop8 />
              <div className="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white">
                Home22
              </div>
            </div>

            <div className="ml-12">
              <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                {'This is inside bracas. '}
                <a href="register" className="underline">
                  To stay
                </a>

                {' '} OR  {' '}
                <a href="https://laravel.com/docs/dusk" className="underline" target="_blank">
                  {'to leave'}
                </a>
                {' '} this website.
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
