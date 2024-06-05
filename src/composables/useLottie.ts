import { onMounted, shallowRef } from 'vue'

interface useLottieType {
  animationData: shallowRef<object | null>
}

type AnimationName = 'morning' | 'evening'

export default function useLottieType(animationName: AnimationName): useLottieType {
  const animationData = shallowRef<object | null>(null)

  onMounted(() => {
    void import(`../assets/lottie/${animationName}.json`)
      .then(({ default: data }) => {
        animationData.value = data
      })
  })

  return {
    animationData,
  }
}