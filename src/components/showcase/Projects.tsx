import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import software from '../../assets/pictures/projects/software.gif';
import art from '../../assets/pictures/projects/art.gif';
import music from '../../assets/pictures/projects/music.gif';

export interface ProjectsProps {}

interface ProjectBoxProps {
    icon: string;
    title: string;
    subtitle: string;
    route: string;
    iconStyle: React.CSSProperties;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
    icon,
    title,
    subtitle,
    route,
    iconStyle,
}) => {
    const [, setIsHovering] = useState(false);
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate(route); // Using relative path since we're in a nested route
    };

    const onMouseEnter = () => {
        setIsHovering(true);
    };

    const onMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            onClick={handleClick}
            className="big-button-container"
            style={{ ...styles.projectLink, cursor: 'pointer' }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleClick(e as any)}
        >
            <div style={styles.projectLinkLeft}>
                <img
                    src={icon}
                    style={Object.assign(
                        {},
                        styles.projectLinkImage,
                        iconStyle
                    )}
                    alt=""
                />
                <div style={styles.projectText}>
                    <h1 style={{ fontSize: 48 }}>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </div>
            <div style={styles.projectLinkRight}></div>
        </div>
    );
};

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
<div className="site-page-content">
    <h1>My Work</h1>
    <h3>& Projects</h3>
    <br />
    <p>
        Explore my portfolio of projects below. I've worked on a variety of applications
        using modern web technologies. Each project demonstrates different aspects of my
        skills and expertise in full-stack development — especially in AI, cloud, and automation.
    </p>
    <br />
    <div style={styles.projectLinksContainer}>
        <ProjectBox
            icon={software}
            iconStyle={styles.computerIcon}
            title="Web Applications"
            subtitle="FULL STACK PROJECTS"
            route="software"
        />
        <ProjectBox
            icon={music}
            iconStyle={styles.computerIcon}
            title="AI & Automation"
            subtitle="GPT-4, Twilio, Agents"
            route="ai"
        />
        <ProjectBox
            icon={art}
            iconStyle={styles.computerIcon}
            title="Cloud Utilities"
            subtitle="AWS, DevOps, CI/CD"
            route="cloud"
        />
    </div>
</div>

    );
};

const styles: StyleSheetCSS = {
    projectLinksContainer: {
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
        flex: 1,
    },
    projectLink: {
        marginBottom: 24,
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box',

        alignItems: 'center',
        justifyContent: 'space-between',
    },
    projectText: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    projectLinkImage: {
        width: 48,
        // height: 48,
        marginRight: 38,
    },
    projectLinkLeft: {
        marginLeft: 16,
        alignItems: 'center',
    },
    computerIcon: {
        width: 56,
        height: 56,
    },
    musicIcon: {
        width: 48,
        height: 48,
    },
    arrowIcon: {
        width: 48,
        height: 48,
    },
    artIcon: {
        width: 21 * 2,
        height: 37 * 2,
    },
};

export default Projects;
