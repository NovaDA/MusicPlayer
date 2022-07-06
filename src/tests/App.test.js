import {screen} from '@testing-library/react'
import App from '../App.js';


describe('App', () =>{
    beforEach(() => {
        render(<App />)
    })

    test('It will increase count by one', async () =>{
        const btn = screen.getByRole('button');
        await userEvent.click(btn);
        expect(btn.textContent).toBe(1);
    })
})
