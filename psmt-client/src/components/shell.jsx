import { Navbar, Sidebar, Badge, Button, Popover } from "flowbite-react";
import { HiBell, HiDesktopComputer, HiBookOpen, HiHome } from "react-icons/hi";
import { GiFirewall } from "react-icons/gi";
import { SiDocker, SiJenkins, SiNginx } from "react-icons/si";

const notificationPopoverContent = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
      </div>
      <div className="px-3 py-2">
        <p>And heres some amazing content. Its very engaging. Right?</p>
      </div>
    </div>
);

function ShellLayout({ currentPage: CurrentPage }) {
    return (<>
        <Navbar fluid 
            style={{ 
                borderBottom: "1px solid gray"
            }}
        >
          <Navbar.Brand>
            <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="PSMT Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Personal Server Management Tool</span>
          </Navbar.Brand>
          <Navbar.Collapse>
            <Popover aria-labelledby="default-popover" content={notificationPopoverContent} placement="bottom">
              <Button color="gray"><HiBell/></Button>
            </Popover>
          </Navbar.Collapse>
          
        </Navbar>
        <div className="body-container w-full h-full bg-blue-500 flex">
            <Sidebar 
                theme={{ 
                    root: {
                        inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-white-500 px-3 py-4 dark:bg-gray-800 border-4 border-rose-600"
                    } 
                }} 
                aria-label="Sidebar with content separator example"
                style={{ borderRight: "1px solid gray"}}
            >
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="/" icon={ HiHome }> Home </Sidebar.Item>
                  <Sidebar.Item href="/system" icon={ HiDesktopComputer }> System </Sidebar.Item>
                  <Sidebar.Item href="/projects" icon={ HiBookOpen }> Projects </Sidebar.Item>
                  <Sidebar.Item href="/firewall" icon={ GiFirewall }> Firewall </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="/nginx" icon={ SiNginx }> Nginx </Sidebar.Item>
                  <Sidebar.Item href="/docker" icon={ SiDocker }> Docker </Sidebar.Item>
                  <Sidebar.Item href="#" icon={ SiJenkins }> Jenkins Admin Panel </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
             <Sidebar.CTA style={{ marginTop: 150 + "%" }}>
                <div className="mb-3 flex items-center">
                  <Badge color="warning">Alpha 0.0.1</Badge>
                  <button
                    aria-label="Close"
                    className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                    type="button"
                  >
                    <svg
                      aria-hidden
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
                    This is an alpha version of the Personal Server Management Tool. 
                    It will be incredibly unstable and may not work as intended.
                </div>
              </Sidebar.CTA>
            </Sidebar>
            <div className="page-container w-full h-full p-5">
                <CurrentPage />
            </div>
        </div>

    </>)
}

export default ShellLayout; 
