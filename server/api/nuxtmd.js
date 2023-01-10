export default defineEventHandler(async (event) => {

  // handle query params
  // const { name } = useQuery(event)

  // return {
  //   message: `Hello Memo!`,
  // }

  // handle post data
  // const { age } = await useBody(event)

  // return {
  //   message: `Hello, ${name}! You are ${age} years old.`
  // }

  // api call with private key
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=Fg9xQCfWclR14R4WyF2StjZ5Xnil8ZZ57OULu9uv')
  //
  return data
})