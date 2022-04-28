import React from 'react'
import styled from 'styled-components'
import SkillItem from './SkillItem'

const Skills = () => {
	return (
		<Wrapper>
			<SkillsIntro>
				<h1>What My Programming Skills Included?</h1>
				<p>I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.</p>
				<br />
				<HireMe>Hire Me</HireMe>
			</SkillsIntro>
			<SkillTech>
				<SkillStack>
					<SkillItem icon="fa-brands fa-html5" color="blue" />
					<SkillItem icon="fa-brands fa-css3" color="#000" />
					<SkillItem icon="fa-brands fa-js" color="#000" />
					<SkillItem icon="fa-brands fa-bootstrap" color="#000" />
					<SkillItem icon="fa-brands fa-php" color="#000" />
					<SkillItem icon="fa-brands fa-react" color="#000" />
					<SkillItem icon="fa-brands fa-node" color="#000" />
					<SkillItem icon="fa-solid fa-database" color="#000" />
					<SkillItem icon="fa-brands fa-git-alt" color="#000" />
					<SkillItem icon="fa-brands fa-figma" color="#000" />
					<SkillItem icon="fa-brands fa-java" color="#000" />
					<SkillItem icon="fa-brands fa-python" color="#000" />
				</SkillStack>
			</SkillTech>
		</Wrapper>
	)
}

export default Skills


const Wrapper = styled.div`
  margin: 170px 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 500px) {
	  flex-direction: column;
	  margin-top: 10px;
	  text-align: center;
  }
`

const SkillsIntro = styled.div`
	display: flex;
	flex-direction: column;
	padding-right: 30px;

	@media (max-width: 500px) {
		text-align: center;
	}

	p{
		font-size: 20px;
	}
`
const HireMe = styled.button`
  width: 121px;
  height: 54px;
  
  color: #212529;
  background: #FFB742;
  border: 2px solid #FFB742;
  box-sizing: border-box;
  border-radius: 50px;
  text-align: center;
  
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  
  &:hover{
      cursor: pointer;
  }
`
const SkillTech = styled.div`
	display: flex;
	flex-direction: row;
	/* flex-wrap: wrap; */
`;

const SkillStack = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr) ;
  justify-content: center;
  align-content: center;
  gap: 10px;
  margin-top:20px;
`