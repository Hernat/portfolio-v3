"use client";

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            <Button
                size="sm"
                variant="outline"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`
                   ${
                       theme === "dark"
                           ? "hover:text-primary-foreground"
                           : "hover:text-primary"
                   } rounded-full hover:bg-primary/10
                `}
            >
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
        </div>
    );
};

export default ThemeToggler;
