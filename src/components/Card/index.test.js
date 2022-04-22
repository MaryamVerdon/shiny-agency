import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'
import Card from './'
 
describe('The Card component', () => {
    it('should picture props', async () => {
      render(
        <ThemeProvider>
            <Card 
                title='Mon Titre'
                picture="/myPicture.png"
            /> 
        </ThemeProvider>
        
      )
      const cardPicture = screen.getByRole('img')
      expect(cardPicture.src).toBe('http://localhost/myPicture.png')
      const cardTitle = screen.getByText(/Mon/i)
      expect(cardTitle.textContent).toBe(' Mon Titre ')
    })
    it('Should add ⭐️ around title', async () => {
        render(
            <ThemeProvider>
                <Card 
                    title='Mon Titre'
                    picture="/myPicture.png"
                /> 
            </ThemeProvider>
            
          )
   
    const cardTitle = screen.getByText(/Mon/i)
    const parentNode = cardTitle.closest('div')
    fireEvent.click(parentNode)
    expect(cardTitle.textContent).toBe('⭐️ Mon Titre ⭐️')
  })
})

