import { createContext } from 'react';

export const Context = createContext();

export const Store = props => {
	// 담아두고 싶은 상태를 객체 형태로 보관, 초기 생성 시에 빈 객체로 둘 수도 있고, 
    // 값을 담아둘 수도 있다.
	const users = {
        name: "Sophia",
        gender: "female"
    }
    
    return (
    	<Context.Provider value={users}>{props.children}</Context.Provider>
    )
}

export default Store;