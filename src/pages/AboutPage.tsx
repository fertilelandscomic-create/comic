import Footer from "../components/Footer";
import Header from "../components/Header";
import CobaltImage from "../assets/about/cobalt.png";
import VicShockedImage from "../assets/about/vicshocked.png";
import { ProtectedEmailLink } from "../components/ProtectedEmailLink";
import { FaBluesky } from "react-icons/fa6";
import { GiPencilBrush } from "react-icons/gi";

export default function AboutPage() {

    return (
        <>
            <Header />
            <main className="max-w-4xl mx-auto m-4 flex flex-col">
                <h1 className="text-tertiary drop-shadow-title font-heading text-5xl text-center">About</h1>

                <article className="
                    bg-accent p-6 h-fit drop-shadow-md mt-4
                    [&_h2]:font-bold [&_h2]:text-xl [&_h2:not(:first-child)]:mt-8 [&_h2]:mb-2
                    [&_p]:mb-2 [&_p]:text-justify
                ">
                    <img src={CobaltImage} alt="Me" className="w-full max-w-50 [@media(min-width:480px)]:float-right mx-auto" />
                    <div>
                        <h2>How can I get in touch with you?</h2>
                        <p>If you would like to contact me my email is <ProtectedEmailLink>fertilelandscomic@gmail.com</ProtectedEmailLink></p>
                        <p>You can also find me on <a className="inline-flex items-center" href="https://bsky.app/profile/greywaterfox.bsky.social" target="_blank" rel="noopener noreferrer"><FaBluesky />Bluesky</a> and <a className="inline-flex items-center" href="https://artfight.net/~greywaterfox" target="_blank" rel="noopener noreferrer"><GiPencilBrush />Artfight</a>.</p>
                    </div>

                    <h2>What kinds of stories or media inspired you growing up?</h2>
                    <p>I read a lot of fantasy growing up, and also loved drawing characters from mario and sonic. As I got older Pokémon, Digimon, and Card Captor Sakura made a strong impression on me. I love making up and drawing creatures.</p>

                    <h2>What first inspired you to start creating comics?</h2>
                    <p>I remember reading Elf Quest one summer when I was a pre-teen and from there I always had an interest in telling stories as comics specifically.</p>
                    <p>Even before that I was creating stories and characters from a young age. My first "book" 'Chubby Cats and Dogs' was written just before Kindergarten. Don't ask me what it was about though, I don't remember.</p>

                    <h2>Did the characters come first, or did they grow out of the story?</h2>
                    <p>The characters came first. Pam was a character made for some self study I did with the book '<a href="https://jessicaabel.com/drawing-words-and-writing-pictures/" target="_blank" rel="noopener noreferrer">Drawing Words and Writing Pictures</a>' Vic was there too, but they were significantly different looking, and much friendlier.</p>
                    <p>I later revised the two to be used in an OCT (Original Character Tournament). Pam hardly changed at all, but Vic went through several large revisions to be more interesting within the context of the OCT. They were from a world I had already created and grown out quite a bit before even Pam's inception, in the end the three (character, story, and world) have grown organically together over the years.</p>

                    <h2>Where did the idea for the Fertile Lands story come from?</h2>
                    <p>The story started in the Fertile Lands with completely different characters dealing with a terrible threat to existence, but I didn't have a good thread to work with for them. When I built Pam and Vic for the aforementioned OCT, I did it with the idea that they were from a different part of the same world. The OCT kind of stood in as a prototype for me, it was really difficult to mesh my world and story ideas with the OCT's though so I didn't get very far. </p>

                    <h2>Which character is your favorite to write or draw?</h2>
                    <p>I hate to pick favorites buuut- it's Pam.</p>
                    <img src={VicShockedImage} alt="Shocked Vic" className="w-full max-w-90 float-right" />
                </article>

            </main>
            <Footer />
        </>
    );
}