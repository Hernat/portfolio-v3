import Socials from "./Socials";
const Footer = () => {
    return (
        <footer className="bg-foreground dark:bg-primary/50 py-12">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <Socials
                        containerStyles="flex gap-x-4 text-primary dark:text-foreground mx-auto xl:mx-0 mb-4"
                        iconsStyles="text-2xl"
                    />
                    <div className="text-muted-foreground">
                        Copyright &copy; {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
