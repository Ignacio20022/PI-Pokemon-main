import CreatePokemon from "../CreatePokemon/CreatePokemon";

export default function Navbar(){
    return(
        <>

            <div class="navbar">
                <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
                <a href="#"><i class="fa fa-fw fa-search"></i> Search</a>
                <a onClick={<CreatePokemon />} href="#"><i class="fa fa-fw fa-envelope"></i> Create</a>
            </div>
        </>
    )
}