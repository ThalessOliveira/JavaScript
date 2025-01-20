import MenuGrupo from "./MenuGrupo"
import MenuItem from "./MenuItem"

export interface MenuProps {
    className?: string
}

export default function Menu(props: MenuProps){
    return (
        <aside className={`${props.className ?? ''}`}>
            <nav className="flex flex-col gap-6"> {/* espaçamento entre os grupos */}
                <MenuGrupo label="Box Model">
                    <MenuItem label="Padding" href="/box-model/padding"/>
                    <MenuItem label="Margin" href="/box-model/margin"/>
                    <MenuItem label="Border" href="/box-model/border"/>
                </MenuGrupo>
                <MenuGrupo label="Display">
                    <MenuItem label="Block" href="/display/block"/>
                    <MenuItem label="Inline" href="/display/inline"/>
                    <MenuItem label="Inline Block" href="/display/inline-block"/>
                </MenuGrupo>
                <MenuGrupo label="Flexbox">
                    <MenuItem label="Flex Container" href="/Flexbox/flex-container"/>
                    <MenuItem label="Flex Item" href="/Flexbox/flex-item"/>
                    <MenuItem label="Flex Direction" href="/Flexbox/flex-direction"/>
                    <MenuItem label="Exemplo Card" href="/Flexbox/card"/>
                </MenuGrupo>
                <MenuGrupo label="Grid">
                    <MenuItem label="Grid Container" href="/grid/grid-container"/>
                    <MenuItem label="Grid Item" href="/grid/grid-item"/>
                    <MenuItem label="Grid Template Columns" href="/grid/grid-template-columns"/>
                </MenuGrupo>
                <MenuGrupo label="Responsividade">
                    <MenuItem label="Breakpoints" href="/responsividade/breakpoints"/>
                    <MenuItem label="Media Query" href="/responsividade/media-query"/>
                    <MenuItem label="Mobile First" href="/responsividade/mobile-first"/>
                </MenuGrupo>
                
            </nav>
        </aside>
    )
}