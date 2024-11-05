import React, { useState } from 'react';

import { IUser } from '@geek/business';

import Fade from '../../animations/fade';
import Header from '../Header';
import Sidebar from '../Sidebar';

import Button, { GenerateButtons } from '../../components/Button';
import Dropdown, { GenerateDropdowns } from '../../components/Dropdown';
import Link, { GenerateLinks } from '../../components/Link';

import type { Menu } from '../interface';

import { TColors } from '../../interfaces';

import Icon from 'src/components/Icon';
import Input from '../../components/Input';

import './Default.scss';

function Buttons() {
    return GenerateButtons({ icon: 'react', iconPosition: 'left' }).map((group) => (
        <div id={group.id} key={group.key}>
            <br/>
            <h1>{group.label}</h1>
            <br/>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                {
                    group.contexts.map((item, index) => (
                        <Button
                            key={index}
                            icon={item.icon}
                            type={item.type}
                            weight={item.weight}
                            context={item.context}
                            onClick={item?.onClick}
                            selected={item.selected}
                            appearance={item.appearance}
                            aria-label={item['aria-label']}
                            iconPosition={item.iconPosition}
                            notificationCounter={item.notificationCounter}>
                            {item.children}
                        </Button>
                    ))
                }
            </div>
        </div>
    ));
}

function Links() {
    return GenerateLinks({}).map((group) => (
        <div id={group.id} key={group.key}>
            <br/>
            <h1>{group.label}</h1>
            <br/>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                {
                    group.contexts.map((item, index) => (
                        <Link
                            key={index}
                            icon={item.icon}
                            weight={item.weight}
                            context={item.context}
                            appearance={item.appearance}
                            iconPosition={item.iconPosition}
                            notificationCounter={item.notificationCounter}
                        >
                            {item.children}
                        </Link>
                    ))
                }
            </div>
        </div>
    ));
}

function Dropdowns() {
    return GenerateDropdowns({}).map((group) => (
        <div id={group.id} key={group.key}>
            <br/>
            <h1>{group.label}</h1>
            <br/>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                {
                    group.contexts.map((item, index) => (
                        <div style={{ margin: '0 0 12rem 0 ' }}>
                            <Dropdown
                                key={index}
                                context={item.context}
                                appearance={item.appearance}>
                                <Button
                                    context={item.context}
                                    iconColor={`${item.context}-100` as TColors}
                                    appearance="standard">
                                    BUTTON 1
                                </Button>
                                <Button
                                    context={item.context}
                                    iconColor={`${item.context}-100` as TColors}
                                    appearance="standard">
                                    BUTTON 2
                                </Button>
                                <Button
                                    context={item.context}
                                    iconColor={`${item.context}-100` as TColors}
                                    appearance="standard">
                                    BUTTON 3
                                </Button>
                            </Dropdown>
                        </div>
                    ))
                }
            </div>
        </div>
    ));
}

interface DefaultProps {
    user?: IUser;
    logo: string;
    menu?: Array<Menu>;
    children: React.ReactNode;
    onLogout: () => void;
}

export default function Default({ user, logo, menu, children, onLogout }: DefaultProps) {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const navbar = menu?.find((group) => group.key === 'navbar')?.items;

    return (
        <Fade>
            <Header
                logo={logo}
                navbar={navbar}
                handleToggleMenu={handleToggleMenu}/>
            <main className="main-container">
                <Sidebar
                    user={user}
                    menu={menu}
                    onLogout={onLogout}
                    showMobileMenu={showMobileMenu}
                    handleToggleMenu={handleToggleMenu}/>
                <div className="main-content">
                    {children}
                    <div id="default" style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                        <h1>INPUT DEFAULT</h1>
                        <Input
                            tip="(Tip)"
                            type="text"
                            value=""
                            label="Label"
                            onBlur={function noRefCheck() {
                            }}
                            onClick={function noRefCheck() {
                            }}
                            onFocus={function noRefCheck() {
                            }}
                            onInput={function noRefCheck() {
                            }}
                            variant="regular"
                            iconContext="primary"
                            onMouseDown={function noRefCheck() {
                            }}
                            placeholder="Placeholder"
                        />
                    </div>
                    <div id="disabled" style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                        <h1>DISABLED</h1>
                        <Input
                            tip="(Tip)"
                            type="text"
                            value=""
                            label="Label"
                            onBlur={function noRefCheck() {
                            }}
                            onClick={function noRefCheck() {
                            }}
                            onFocus={function noRefCheck() {
                            }}
                            onInput={function noRefCheck() {
                            }}
                            variant="regular"
                            disabled
                            onMouseDown={function noRefCheck() {
                            }}
                            iconContext="primary"
                            placeholder="Placeholder"
                        />
                    </div>
                    <div id="autofocus" style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                        <h1>WITH AUTO FOCUS</h1>
                        <Input
                            tip="(Tip)"
                            type="text"
                            value=""
                            label="Label"
                            onBlur={function noRefCheck() {
                            }}
                            onClick={function noRefCheck() {
                            }}
                            onFocus={function noRefCheck() {
                            }}
                            onInput={function noRefCheck() {
                            }}
                            variant="regular"
                            autoFocus
                            onMouseDown={function noRefCheck() {
                            }}
                            iconContext="primary"
                            placeholder="Placeholder"

                        />
                    </div>
                    <div id="prepend-append"
                         style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                        <h1>WITH PREPEND AND APPEND</h1>
                        <Input
                            tip="(Tip)"
                            type="text"
                            value=""
                            label="Label"
                            variant="regular"
                            onBlur={function noRefCheck() {
                            }}
                            onClick={function noRefCheck() {
                            }}
                            onFocus={function noRefCheck() {
                            }}
                            onInput={function noRefCheck() {
                            }}
                            onMouseDown={function noRefCheck() {
                            }}
                            iconContext="primary"
                            placeholder="Placeholder">
                            <Button context="primary" data-children="prepend">
                                prepend
                            </Button>
                            <Button context="primary" data-children="append">
                                append
                            </Button>
                        </Input>
                    </div>
                    <div id="floating-button"
                         style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                        <h1>WITH FLOATING BUTTONS</h1>
                        <Input
                            tip="(Tip)"
                            type="text"
                            value=""
                            label="Label"
                            variant="regular"
                            onBlur={function noRefCheck() {
                            }}
                            onClick={function noRefCheck() {
                            }}
                            onFocus={function noRefCheck() {
                            }}
                            onInput={function noRefCheck() {
                            }}
                            onMouseDown={function noRefCheck() {
                            }}
                            hasFloatingSlots
                            iconContext="primary"
                            placeholder="Placeholder">
                            <Button
                                size="small"
                                style={{ top: '50%', right: '4px', position: 'absolute', transform: 'translateY(-50%)' }}
                                context="primary"
                                data-children="append">append</Button>
                        </Input>
                    </div>
                    <div id="addons" style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                        <h1>WITH ADDONS</h1>
                        <Input
                            tip="(Tip)"
                            type="text"
                            addon="0,00"
                            value=""
                            label="Label"
                            onBlur={function noRefCheck() {
                            }}
                            onClick={function noRefCheck() {
                            }}
                            onFocus={function noRefCheck() {
                            }}
                            onInput={function noRefCheck() {
                            }}
                            variant="regular"
                            onMouseDown={function noRefCheck() {
                            }}
                            iconContext="primary"
                            placeholder="Placeholder"
                        />
                    </div>
                    <div id="error" style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                        <h1>WITH ERROR</h1>
                        <Input
                            tip="(Tip)"
                            type="text"
                            value=""
                            label="Label"
                            onBlur={function noRefCheck() {
                            }}
                            onClick={function noRefCheck() {
                            }}
                            onFocus={function noRefCheck() {
                            }}
                            onInput={function noRefCheck() {
                            }}
                            variant="regular"
                            isInvalid
                            placeholder="Placeholder"
                            onMouseDown={function noRefCheck() {
                            }}
                            iconContext="primary"
                            invalidMessage="Digite um email válido"
                        />
                    </div>
                    <div id="floating-label"
                         style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                        <h1>WITH FLOATING LABEL</h1>
                        <Input
                            tip="(Tip)"
                            type="text"
                            value=""
                            variant="regular"
                            label="Label"
                            onBlur={function noRefCheck() {
                            }}
                            onClick={function noRefCheck() {
                            }}
                            onFocus={function noRefCheck() {
                            }}
                            onInput={function noRefCheck() {
                            }}
                            placeholder="Testando"
                            onMouseDown={function noRefCheck() {
                            }}
                            floatingLabel
                            iconContext="primary"
                        />
                    </div>
                    <div id="right-icon" style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                        <h1>WITH RIGHT ICON</h1>
                        <Input
                            tip="(Tip)"
                            rows={10}
                            type="text"
                            value=""
                            label="Label"
                            onBlur={function noRefCheck() {
                            }}
                            onClick={function noRefCheck() {
                            }}
                            onFocus={function noRefCheck() {
                            }}
                            onInput={function noRefCheck() {
                            }}
                            variant="regular"
                            placeholder="Placeholder"
                            onMouseDown={function noRefCheck() {
                            }}
                            iconContext="primary"
                        >
                            <Icon
                                data-children="icon-right"
                                icon="<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><path d=&quot;M12 5C7.455 5 3.545 7.893 2 12c1.545 4.107 5.455 7 10 7 4.546 0 8.454-2.893 10-7-1.546-4.107-5.454-7-10-7Zm0 11c-2.24 0-4-1.76-4-4s1.76-4 4-4 4 1.76 4 4-1.76 4-4 4Zm-2-4c0-1.133.867-2 2-2s2 .867 2 2-.867 2-2 2-2-.867-2-2Z&quot; fill=&quot;currentColor&quot;/></svg>"
                            />
                        </Input>
                    </div>
                    <div id="left-icon" style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                        <h1>WITH LEFT ICON</h1>
                        <Input
                            iconContext="primary"
                            label="Label"
                            onBlur={function noRefCheck() {
                            }}
                            onClick={function noRefCheck() {
                            }}
                            onFocus={function noRefCheck() {
                            }}
                            onInput={function noRefCheck() {
                            }}
                            onMouseDown={function noRefCheck() {
                            }}
                            placeholder="Placeholder"
                            rows={10}
                            tip="(Tip)"
                            type="text"
                            value=""
                            variant="regular"
                        >
                            <Icon
                                data-children="icon-left"
                                icon="<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><path d=&quot;M11 3a8 8 0 1 0 4.619 14.533l3.442 3.442a1 1 0 0 0 1.414-1.414l-3.38-3.38A8 8 0 0 0 11 3Zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z&quot; fill=&quot;currentColor&quot;/></svg>"
                            />
                        </Input>
                    </div>
                    <div id="both-icon" style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                        <h1>WITH BOTH ICONS</h1>
                        <Input
                            tip="(Tip)"
                            rows={10}
                            type="text"
                            value=""
                            label="Label"
                            onBlur={function noRefCheck() {
                            }}
                            onClick={function noRefCheck() {
                            }}
                            onFocus={function noRefCheck() {
                            }}
                            onInput={function noRefCheck() {
                            }}
                            variant="regular"
                            iconContext="primary"
                            onMouseDown={function noRefCheck() {
                            }}
                            placeholder="Placeholder">
                            <Icon
                                data-children="icon-left"
                                icon="<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><path d=&quot;M11 3a8 8 0 1 0 4.619 14.533l3.442 3.442a1 1 0 0 0 1.414-1.414l-3.38-3.38A8 8 0 0 0 11 3Zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z&quot; fill=&quot;currentColor&quot;/></svg>"
                            />
                            <Icon
                                data-children="icon-right"
                                icon="<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><path d=&quot;M12 5C7.455 5 3.545 7.893 2 12c1.545 4.107 5.455 7 10 7 4.546 0 8.454-2.893 10-7-1.546-4.107-5.454-7-10-7Zm0 11c-2.24 0-4-1.76-4-4s1.76-4 4-4 4 1.76 4 4-1.76 4-4 4Zm-2-4c0-1.133.867-2 2-2s2 .867 2 2-.867 2-2 2-2-.867-2-2Z&quot; fill=&quot;currentColor&quot;/></svg>"
                            />
                        </Input>
                    </div>
                    <div id="multiline" style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                        <h1>MULTILINE</h1>
                        <Input
                            tip="(Tip)"
                            type="text"
                            value=""
                            label="Label"
                            onBlur={function noRefCheck() {
                            }}
                            onClick={function noRefCheck() {
                            }}
                            onFocus={function noRefCheck() {
                            }}
                            onInput={function noRefCheck() {
                            }}
                            variant="regular"
                            multiline
                            placeholder="Placeholder"
                            iconContext="primary"
                            onMouseDown={function noRefCheck() {
                            }}
                        />
                    </div>
                    <div id="counter" style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
                        <h1>INPUT DEFAULT</h1>
                        <Input
                            tip="(Tip)"
                            type="text"
                            value=""
                            label="Label"
                            onBlur={function noRefCheck() {}}
                            onClick={function noRefCheck() {}}
                            onFocus={function noRefCheck() {}}
                            onInput={function noRefCheck() {}}
                            variant="regular"
                            iconContext="primary"
                            onMouseDown={function noRefCheck() {}}
                            placeholder="Placeholder">
                            <div data-children="counter">
                                9+
                            </div>
                        </Input>
                    </div>
                </div>
            </main>
        </Fade>
    );
}